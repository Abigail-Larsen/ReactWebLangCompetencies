import React from 'react';
import {
    Link
} from "react-router-dom";
import styled from '@emotion/styled';
import { makeStyles } from '@material-ui/core/styles';
import { emphasize } from "@material-ui/core/styles/colorManipulator";
import GitHubIcon from '@material-ui/icons/GitHub';
// import {
//     Grid,
//     // FormRow,
//     Paper
// } from '@material-ui/core';
import { CompList } from '../../constants/index'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width: '100%',
    "&:hover, &:focus": {
        backgroundColor: emphasize('#e3f2fd', 0.08),
        cursor: 'pointer',
    },
  },
}));

export const Home = () => {
    const classes = useStyles();

    return (
        <Wrapper>
            <div className={classes.root}>
                <span>Web Tools and Frameworks Competencies:</span>
                <br/>
                <Grid container xl={12} spacing={3}>

                    <Grid item xs={4}>
                        <Paper className={classes.paper} onClick={() => window.location.href("https://github.com/yabbbb/ReactWebLangCompetencies")}>
                            <GitHubIcon/>
                            <h3>React App</h3>
                        </Paper>
                    </Grid>

                    <Grid item xs={4}>
                        <Paper className={classes.paper} onClick={() => window.location.href("https://github.com/yabbbb/VueApp")}>
                            <GitHubIcon/>
                            <h3>Vue App</h3>
                        </Paper>
                    </Grid>

                    <Grid item xs={4}>
                        <Paper className={classes.paper} onClick={() => window.location.href("https://github.com/yabbbb/Todo-Svelte")}>
                            <GitHubIcon/>
                            <h3>Svelte App</h3>
                        </Paper>
                    </Grid>
                </Grid>
            </div>


            
            <div className={classes.root}>
                <span>Web Languages || Competencies:</span>
                <Grid container item xl={12} spacing={3}>
                    <Grid item xs={4}>
                        <Paper className={classes.paper}>
                            <GitHubIcon/>
                            <h3>JS Server</h3>
                        </Paper>
                    </Grid>

                    <Grid item xs={4}>
                        <Paper className={classes.paper}>
                            <GitHubIcon/>
                            <h3>JS API</h3>
                        </Paper>
                    </Grid>

                    <Grid item xs={4}>
                        <Paper className={classes.paper}>
                            <GitHubIcon/>
                            <h3>Full Stack App</h3>
                        </Paper>
                    </Grid>
                </Grid>
            </div>

            {/* <TextWrapper>



                <Typography variant="h4">
                    Click to view a competency
                </Typography>

                {
                    CompList.map(i => {
                        console.log('hey there', i)
                        return (
                        <Link to={i.path}>
                            <div>{i.title}</div>
                        </Link>
                    )})
                }
            </TextWrapper> */}
        </Wrapper>

    )
}

const PaperWrapper = styled.div`
    width: 100%;
    display:flex;
    justify-content: space-around;

`;

const PaperInside = styled.div`
    width: 30vw;
    display:flex;
    justify-content: space-around;

`;
const Wrapper = styled.div`
    padding: 30px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    color: #673ab7;
    height: 80%;
`;

const TextWrapper = styled.div`
    display: flex;
    height:70%;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    z-index: 9;
`;