import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Paper, InputBase, Divider, IconButton, Card, Typography } from '@material-ui/core';
import { Send } from '@material-ui/icons';
import PostsList from './PostsList'

const styles = {
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: '95%',
        margin: '16px auto'
    },
    input: {
        marginLeft: 8,
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        width: 1,
        height: 28,
        margin: 4,
    },
    posts: {
        width: '95%',
        margin: '16px auto',
    },
    header: {
        width: '95%',
        color: '#7a55f4',
        margin: '32px auto'
    }
};

const mockPosts=[
    {post:'Bacon ipsum dolor amet ground round short loin buffalo pork chop tenderloin beef ribs beef bresaola. Jerky burgdoggen landjaeger kevin tenderloin. T-bone landjaeger shank burgdoggen brisket boudin turducken capicola ground round kielbasa spare ribs fatback bresaola chicken ham. Strip steak beef ribs filet mignon venison andouille chuck prosciutto short loin turducken sausage beef. Shoulder biltong sausage kielbasa, cupim boudin turducken flank cow pancetta frankfurter shankle beef ribs andouille fatback. Ham pork beef ribs sirloin.', Date},
    {post:'Swine pork tail drumstick strip steak pastrami. Picanha ham venison ham hock, sausage pig t-bone short ribs corned beef prosciutto tongue porchetta rump capicola buffalo.', Date}

]

function PostComponent(props) {
    const { classes } = props;
    const [post, setPost] = useState();

    return (
        <Card className={classes.posts}>
            <Typography className={classes.header} variant="h5"><b>Posts</b></Typography>
            <Paper className={classes.root} elevation={1}>
                <InputBase className={classes.input} placeholder="Write something..."/>
                <Divider className={classes.divider} />
                <IconButton color="primary" className={classes.iconButton} aria-label="Send" onClick={()=>setPost(mockPosts)}>
                {console.log(mockPosts)}
                    <Send />
                </IconButton>
            </Paper>
            <Divider/>
            <PostsList poyst={mockPosts}></PostsList>
        </Card>
    );
}

PostComponent.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PostComponent);