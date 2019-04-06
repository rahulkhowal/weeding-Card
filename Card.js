import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
//import CardActions from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import CardContent from '@material-ui/core/CardContent'
import CardActionArea from '@material-ui/core/CardActionArea'
const styles = {
    card: {
        maxWidth: 700
    },
    media: {
        objectFit: 'cover'
    },
    date: {
        float: "left"
    },
    venue: {
        float: "right"
    }


}
const CardNew = (props) => {
    const { classes } = props
    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia component="img"
                    className={classes.media}
                    height="300"
                    src={props.Photo}
                    title="Weeding Card"
                />
                <CardContent>
                    <Typography gutterBottom variant="h4" component="h2">
                        {props.BrideName}
                    </Typography>
                    <Typography component="h3">
                        Weds
                    </Typography>
                    <Typography gutterBottom variant="h4" component="h2">
                        {props.GroomName}
                    </Typography>
                    <Typography component="h3" className={classes.venue}>
                        Venue:{props.Venue}
                    </Typography>
                    <Typography component="h3" className={classes.date}>
                        Date: {props.Date}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default withStyles(styles)(CardNew);