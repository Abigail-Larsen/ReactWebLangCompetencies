import React from 'react';
import styled from '@emotion/styled';
import { makeStyles } from '@material-ui/core/styles';
import { emphasize } from "@material-ui/core/styles/colorManipulator";
import GitHubIcon from '@material-ui/icons/GitHub';
import ComputerIcon from '@material-ui/icons/Computer';

import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    height:'100%',
    marginTop: '50px',
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
                        <Paper className={classes.paper}>                            
                            <Content>
                                <h1>React App</h1>
                                <span>Simple To Do app that uses local storage</span>
                                <Redirects>
                                    <Link href="https://github.com/yabbbb/ReactWebLangCompetencies" color="inherit">
                                        <GitHubIcon/>
                                    </Link>
                                    <Link href="#" color="inherit">
                                        <ComputerIcon/>
                                    </Link>
                                </Redirects>
                            </Content>
                        </Paper>
                    </Grid>

                    <Grid item xs={4}>
                        <Paper className={classes.paper}>
                            <Content>
                                <h1>Vue App</h1>
                                <span>To Do app that uses local storage</span>
                                <Redirects>
                                    <Link href="https://github.com/yabbbb/VueApp" color="inherit">
                                        <GitHubIcon/>
                                    </Link>
                                    <Link href="https://vue-todo-apps.herokuapp.com/" color="inherit">
                                        <ComputerIcon/>
                                    </Link>
                                </Redirects>
                            </Content>
                        </Paper>
                    </Grid>

                    <Grid item xs={4}>
                        <Paper className={classes.paper}>
                            <Content>
                                <h1>Svelte App</h1>
                                <span>To Do app that uses local storage</span>
                                <Redirects>
                                    <Link href="https://github.com/yabbbb/Todo-Svelte" color="inherit">
                                        <GitHubIcon/>
                                    </Link>
                                    <Link href="https://svelte-todo-apps.herokuapp.com/" color="inherit">
                                        <ComputerIcon/>
                                    </Link>
                                </Redirects>
                            </Content>
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
        </Wrapper>

    )
}

const Content = styled.div`
    width: 100%;
    display:flex;
    flex-direction:column;
    align-items: flex-start;
    text-align: left;
`;

const Redirects = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 30px;
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
