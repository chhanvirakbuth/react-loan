import React , { Component } from 'react';

import $ from 'jquery';
import 'jquery-validation';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import InputElement from "../../../../elements/input";
import word from "../../../../language/word";
import NativeSelects from "../../../../elements/select";
import { ArrowForwardIos , ArrowBackIos } from "@material-ui/icons";
import DatePicker from "../../../../elements/date-time";

class RegisterDepositStep1 extends  Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name      : "",
            first_name_error: false
        }
    }

    componentDidMount() {
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

    render() {
        return (
            <div>
                <form action="#" id={`from-step1`}>
                    <Grid container spacing={3}>
                        {/*first name */}
                        <Grid item xs={12} sm={12} md={6}>
                            <InputElement label={ word.firstName }
                                          id={`.errorFirstName`}
                                          variant="outlined"
                                          name={`first_name`}
                                          maxLength={`50`}/>
                                          <small className={`errorFirstName`}/>
                        </Grid>
                        {/*last name*/}
                        <Grid item xs={12} sm={12} md={6}>
                            <InputElement label={ word.lastName }
                                          variant="outlined"
                                          id={`.errorLastName`}
                                          name={`last_name`}
                                          maxLength={`50`}/>
                                          <small className="errorLastName"/>
                        </Grid>
                          {/*sex*/}
                        <Grid item xs={12} sm={12} md={6}>
                            <NativeSelects/>
                        </Grid>
                          {/*date of birth*/}
                        <Grid item xs={12} sm={12} md={6}>
                            <DatePicker/>
                        </Grid>
                          {/*id card*/}
                          {/*id card expired date*/}
                          {/*current occupation*/}
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
