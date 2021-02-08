import React, {useEffect, useState} from 'react';
import $ from 'jquery';
import 'jquery-validation';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {
    useHistory,
 } from 'react-router-dom';

import word from "../../../language/word";
import SimpleCard from "../../../elements/card/simple-card";
import CircularProgress from "@material-ui/core/CircularProgress";

// service
import AuthService from '../../../../services/auth/service';
import RoutePath from "../../../../config/route-path";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    font :{
        fontFamily : 'Koulen',
        color      : "#3f51b5"
    }
}));

export default function SignIn( props ) {
    const classes = useStyles();
    const [ data , setData ]        = useState(  {loading: false , errorMessage : "" });
    const [ phone , setPhone ]      = useState("");
    const [ password , setPassword] = useState("");
    const handleChangePhone = ( value ) => {
        setPhone( value );
    }
    const handleChangePassword = ( value ) => {
        setPassword( value );
    }
    // handle login
    let history = useHistory();
    const handleLogin = ( event ) => {
        event.preventDefault();
        setData({ loading: true });
        AuthService.login( phone,password).then(
            () => {
                // redirect to home
                history.replace(RoutePath.home);
            }, error => {
                console.log( error.status  );
                return;
                const code = error.response.status;
                let message = "";
                if( code === 401 ){ // unauthorized
                   message = "ព័ត៍មានមិនត្រឹមត្រូវ";
                }else{
                   message = "សូមព្យាយាមម្ដងទៀត"
                }
                setData({
                    loading: false,
                    errorMessage: message
                });
            }
        );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
       document.title = word.welcomeBack;
       // validation form
        // validation
        $("#form-login").validate({
            rules: {
                phone: {
                    required : true,
                    maxlength : 10,
                    number: true
                },
                password: {
                    required: true,
                    maxlength : 50
                },
            },
            //For custom messages
            messages: {
                phone: {
                    required: 'សូមបញ្ចូលលេខទូរសព្ទ',
                    maxlength : 'យ៉ាងច្រើន១០ខ្ទង់',
                    number : "ត្រូវតែជាលេខ"
                },
                password: {
                    required: 'បញ្ចូលពាក្យសម្ងាត់',
                    maxlength : 'យ៉ាងច្រើន៥០តួ'
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
    });
    return (
        <Container component="main" maxWidth="xs" style={{ marginTop : '10% '}}>
            <CssBaseline />
                <SimpleCard>
                    <div className={classes.paper}>
                        <h2 className={classes.font}>
                            { word.welcomeBack }
                        </h2>
                        <form className={classes.form} id={`form-login`} onSubmit={handleLogin}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                id=".phone"
                                label={ word.phone }
                                name="phone"
                                autoFocus
                                autoComplete ={`username`}
                                value={phone}
                                onChange={event => handleChangePhone(event.target.value)}
                            />
                            <small className={`phone`}/>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                name="password"
                                label={ word.password }
                                type="password"
                                id=".password"
                                autoComplete={`current-password`}
                                value={password}
                                onChange={event => handleChangePassword(event.target.value)}
                            />

                            <small className="password"/>
                            {/*error message*/}
                            { data.errorMessage !== "" && <small>{data.errorMessage}</small>}
                            {/*button submit*/}
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                size={`large`}
                                disabled={data.loading}
                                className={classes.submit}
                            >
                                {
                                    data.loading
                                    ? <CircularProgress size={25}/>
                                    : word.signIn
                                }
                            </Button>
                        </form>
                    </div>
                </SimpleCard>
        </Container>
    );
}
