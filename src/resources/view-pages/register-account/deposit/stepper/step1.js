import React , { Component } from 'react';

import $ from 'jquery';
import 'jquery-validation';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { ArrowForwardIos , ArrowBackIos } from "@material-ui/icons";
import SimpleSelect from "../../../../elements/select";
import DatePicker from "../../../../elements/date-time";
import SimpleBackdrop from "../../../../elements/progress-bar/back-drop";
import CustomizedSnackbars from "../../../../elements/snackbar";
import InputElement from "../../../../elements/input";

import word from "../../../../language/word";
import locationService from "../../../../../services/setup/location";
import sexService from "../../../../../services/setup/sex";
import occupationService from "../../../../../services/setup/occupation";

class RegisterDepositStep1 extends  Component {
    constructor(props) {
        super(props);
        this.state = {
            loading : true,
            apiData : {
                pob_provinces           : [],
                pob_districts           : [],
                pob_communes            : [],
                pob_villages            : [],
                current_provinces       : [],
                current_districts       : [],
                current_communes        : [],
                current_villages        : [],
                sex                     : [],
                occupation              : []
            },
            formData : {
                pob_province_id        : "",
                pob_district_id        : "",
                pob_commune_id         : "",
                pob_village_id         : "",
                pob_address            : "",
                current_province_id    : "",
                current_district_id    : "",
                current_commune_id     : "",
                current_village_id     : "",
                current_address        : "",
                first_name             : "",
                last_name              : "",
                sex_id                 : "",
                date_of_birth          : "",
                id_card_no             : "",
                id_card_expire_date    : "",
                occupation_id          : "",
                phone                  : "",
            },
            errors : "",
            disabled : {
                pob_district        : true,
                pob_commune         : true,
                pob_village         : true,
                current_district    : true,
                current_commune     : true,
                current_village     : true
            }
        }
       // bind method
        this.handlePobLocationChange   = this.handlePobLocationChange.bind( this );
    }


    componentDidMount() {
        // request all needed api
        Promise.all([
            sexService.index() ,
            locationService.province(),
            occupationService.index()
        ]).then(( response ) => {
            const sex       = response[0];
            const province  = response[1];
            const occupation= response[2];
            this.setState({
                loading : false,
                apiData : {
                    ...this.state.apiData,
                    pob_provinces       : province.data.data[0],
                    current_provinces   : province.data.data[0],
                    sex                 : sex.data.data[0],
                    occupation          : occupation.data.data[0]
                }
            });
            console.log( this.state );
        }).catch(( error ) => {
            this.setState({
                errors : "មានអ្វីមួយមិនប្រក្រតី សូមព្យាយាមម្ដងទៀត"
            });
        });

        // validation
        $("#from-step1").validate({
            rules: {
                first_name: {
                    required: true,
                    maxLength : 50
                },
                last_name: {
                    required: true,
                    maxLength : 50
                },
            },
            //For custom messages
            messages: {
                first_name: {
                    required: 'សូមបញ្ចូលឈ្មោះត្រកូលរបស់អតិថិជន',
                    maxLength : 50
                },
                last_name: {
                    required: 'សូមបញ្ចូលឈ្មោះខ្លួនរបស់អតិថិជន',
                    maxLength : 50
                },
            },
            errorElement : 'InputElement',
            errorPlacement: function(error, element) {
                var placement = $(element).attr('id');
                if (placement) {
                    $(placement).append(error)
                } else {
                    error.insertAfter(element);
                }
            }
        });
    }

    // handle change place of birth location
    handlePobLocationChange( event ){
        const { name , value } = event.target;
        this.setState({
            formData : {
                ...this.state.formData,
                [ name ] : value
            }
        },() => {
            // query next
            // check if name = pob_province then query district with province code
            if ( name === "pob_province_id"){
                return locationService.district( value ).then(response => {
                   this.setState({
                      apiData : {
                          ...this.state.apiData,
                          pob_districts : response.data.data[0],
                          pob_communes  : [],
                          pob_villages  : []
                      },
                       disabled : {
                          ...this.state.disabled,
                           pob_district : false,
                           pob_commune  : true,
                           pob_village  : true
                       }
                   })
                });
            }
            // if change district then query commune
            if( name === "pob_district_id" ){
                return locationService.commune( value ).then(response => {
                    this.setState({
                        apiData : {
                            ...this.state.apiData,
                            pob_communes : response.data.data[0],
                            pob_villages : []
                        },
                        disabled : {
                            ...this.state.disabled,
                            pob_commune : false,
                            pob_village : true
                        }
                    })
                });
            }
            // if change commune then query village
            if ( name === "pob_commune_id" ){
                return locationService.village( value ).then(response => {
                    this.setState({
                        apiData : {
                            ...this.state.apiData,
                            pob_villages : response.data.data[0]
                        },
                        disabled : {
                            ...this.state.disabled,
                            pob_village : false
                        }
                    })
                });
            }
        });
        // end of statement
    }

    // render view
    render() {
        const { apiData } = this.state;
        return (
            <div>
                { this.state.errors  ?
                    <CustomizedSnackbars open={false} type={`warning`}>
                        Failed to fetch data
                    </CustomizedSnackbars>
                    :
                    <SimpleBackdrop open={this.state.loading}/>
                }
                <form action="#" id={`from-step1`}>
                    <Grid container spacing={3}>

                        {/*personal info*/}
                        <Grid item xs={12}>
                            <h6 className={`no-margin`}>{ word.personalInfo }</h6>
                        </Grid>
                        {/*first name */}
                        <Grid item xs={12} sm={6} md={6}>
                            <InputElement label={ word.firstName }
                                          id={`.errorFirstName`}
                                          variant="outlined"
                                          name={`first_name`}
                                          maxLength={`50`}/>
                                          <small className={`errorFirstName`}/>
                        </Grid>
                        {/*last name*/}
                        <Grid item xs={12} sm={6} md={6}>
                            <InputElement label={ word.lastName }
                                          variant="outlined"
                                          id={`.errorLastName`}
                                          name={`last_name`}
                                          maxLength={`50`}/>
                                          <small className="errorLastName"/>
                        </Grid>
                        {/*sex*/}
                        <Grid item xs={12} sm={6} md={4}>
                            <SimpleSelect
                                label={word.sex}
                                name={`sex_id`}
                                items={ apiData.sex }
                                handleChange={ this.handlePobLocationChange }
                            />
                        </Grid>

                        {/*date of birth*/}
                        <Grid item xs={12} sm={6} md={4}>
                            <DatePicker
                                label={word.dateOfBirth}
                                name={`date_of_birth`}
                            />
                        </Grid>

                        {/*phone*/}
                        <Grid item xs={12} sm={6} md={4}>
                            <InputElement
                                label={word.phone}
                                variant={`outlined`}
                                name={`phone`}
                            />
                        </Grid>

                        {/*id card*/}
                        <Grid item xs={12} sm={6} md={4}>
                            <InputElement
                                label={word.idCard}
                                variant={`outlined`}
                                name={`id_card_no`}
                            />
                        </Grid>

                        {/*id card expired date*/}
                        <Grid item xs={12} sm={6} md={4}>
                            <DatePicker label={word.idCardExpireDate}/>
                        </Grid>

                        {/*current occupation*/}
                        <Grid item xs={12} sm={6} md={4}>
                            <SimpleSelect
                                label={word.occupation}
                                name={`occupation_id`}
                                items={apiData.occupation}
                                handleChange={ this.handlePobLocationChange }
                                />
                        </Grid>

                        {/*birth address*/}
                        <Grid item xs={12}>
                            <h6 className={`no-margin`}>{ word.birthAddress }</h6>
                        </Grid>

                        {/*province*/}
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <SimpleSelect
                                label={word.province}
                                name={`pob_province_id`}
                                items={apiData.pob_provinces}
                                handleChange={ this.handlePobLocationChange }
                                autoWidth/>
                        </Grid>

                        {/*district*/}
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <SimpleSelect
                                label={word.district}
                                items={apiData.pob_districts}
                                name={`pob_district_id`}
                                handleChange={ this.handlePobLocationChange }
                                disabled={ this.state.disabled.pob_district }/>
                        </Grid>

                        {/*commune*/}
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <SimpleSelect
                                label={word.commune}
                                name={`pob_commune_id`}
                                items={apiData.pob_communes}
                                handleChange={ this.handlePobLocationChange }
                                disabled={ this.state.disabled.pob_commune }/>
                        </Grid>

                        {/*village*/}
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <SimpleSelect
                                label={word.village}
                                name={`pob_village_id`}
                                items={apiData.pob_villages}
                                handleChange={ this.handlePobLocationChange }
                                disabled={ this.state.disabled.pob_village }
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <InputElement
                                label={word.address}
                                name={`pob_address`}
                                variant={`outlined`}/>
                        </Grid>

                        {/*current address*/}
                        <Grid item xs={12}>
                            <h6 className={`no-margin`}>{ word.currentAddress }</h6>
                        </Grid>

                        {/*province*/}
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <SimpleSelect
                                label={word.province}
                                defaultValue={``}
                                items={apiData.current_provinces}
                                name={`current_province_id`}
                                />
                        </Grid>

                        {/*district*/}
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <SimpleSelect
                                label={word.district}
                                defaultValue={``}
                                name={`current_district_id`}
                                disabled/>
                        </Grid>

                        {/*commune*/}
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <SimpleSelect
                                label={word.commune}
                                defaultValue={``}
                                name={`current_commune_id`}
                                disabled/>
                        </Grid>

                        {/*village*/}
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <SimpleSelect
                                label={word.village}
                                defaultValue={``}
                                name={`current_village_id`}
                                disabled/>
                        </Grid>
                        <Grid item xs={12}>
                            <InputElement
                                label={word.address}
                                name={`current_address`}
                                variant={`outlined`}/>
                        </Grid>

                    </Grid>


                    {/*button action*/}
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Button startIcon={<ArrowBackIos/>}>
                                { word.back }
                            </Button>
                            <Button
                                variant="contained"
                                type={`submit`}
                                endIcon={<ArrowForwardIos/>}
                                color="primary"
                                className={`ml-10`}>
                                { word.next }
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </div>
        );
    }

}

export default RegisterDepositStep1;
