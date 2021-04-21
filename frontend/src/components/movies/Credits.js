import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCredits, setLoading } from '../../redux/actions/movieActions';
import Spinner from '../../layout/Spinner';
import png from '../../images/castMissing.png';

//material UI
import { withStyles } from '@material-ui/core/'
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Grid } from '@material-ui/core/'
import LinearProgress from "@material-ui/core/LinearProgress";

const useStyles = theme =>({

  container: {
    display: 'flex',
    margin: '0 100px 0px 100px',
    border: "none", 
    boxShadow: "none"
  },
  item: {
    textAlign : "center",
    border: "none", 
    boxShadow: "none",
    height:400,
    width:200
  },
  castCharacter: {
    fontSize: "18px"
  },   
  image: {
    borderRadius: '10%',
    border: '3px solid #fff',
    height: 250
  },
  cast: {
    fontWeight:'Bold',
    fontSize: "32px",
    marginTop: "10px",
    marginBottom: "10px",
    textAlign : "left",
    marginLeft:125
  },
  noimage: {
    borderRadius: '50%',
    background: 'var(--greylight)',
    color: '#fff',
    border: '3px solid #fff',
    fontSize: '100px',
    lineHeight: '117px',
    height: '125px',
    width: '125px'
  },
  barCover:{
    height: 10,
    borderRadius: 5,
    width:120
  },
  barCover:{
    height: 10,
    borderRadius: 5,
    width:50,
    marginLeft:125,
    marginBottom: "20px"
  },
  videoContainer: {
    display: 'flex',
    border: "none", 
    boxShadow: "none",
    alignItems: 'center',
    justifyContent: 'center',
    justify: "center",
    marginLeft:160,
    width: 1200
  },
});


const getImage = (path) => `https://image.tmdb.org/t/p/w300/${path}`;

export class Credits extends Component {
    // componentDidMount() {
    //   this.props.fetchCredits(this.props.id);
    //   this.props.setLoading();
    // }
    render() {
        const { loading, credits } = this.props;
        //material UI
        const {classes} = this.props;   
        let castList = credits.slice(0,6).map(castMember => (
          <Grid
                 container
                 justify="center"
                 alignItems="center"
                 direction="column"
                 style={{ minHeight:"200vh"}, { maxHeight:"200vh"}}
           >
    <Grid item>
        <Card className={classes.item} key={castMember.name}>
              {castMember.profile_path ? (
          <CardActionArea >
          <CardMedia justifyContent="center"
   
          className={classes.image}
          component="img"
          height="250"
          image={getImage(castMember.profile_path)}
          alt="">

           </CardMedia>
           <CardContent >
           <Typography className={classes.castCharacter} color="textSecondary" gutterBottom>{castMember.name}</Typography>
           <Typography color="textSecondary" gutterBottom>{castMember.character}</Typography>
          </CardContent>
          </CardActionArea>
      ) : (
           <Card className={classes.item}>
           <CardMedia justifyContent="center"
   
          className={classes.image}
          component="img"
          height="250"
          image={png}
          alt="">  
             
           </CardMedia>
           <Typography className={classes.castCharacter} color="textSecondary" gutterBottom>{castMember.name}</Typography>
           <Typography color="textSecondary" gutterBottom>{castMember.character}</Typography>
           </Card>
      )}
     </Card>
   </Grid>
  </Grid>
  ));
  let contents = loading ? <Spinner /> : castList;
  return  <div>
  <Typography className={classes.cast}>Cast</Typography>
  <LinearProgress className={classes.barCover} variant="determinate" color="Secondary"  />
  <div className={classes.container} > {contents}</div>
  
  </div> ; }; } 
   
         

const mapStateToProps = state => ({
    loading: state.movie.loading,
    credits: state.movie.credits
  });
  
  export default connect(
    mapStateToProps,
    { fetchCredits, setLoading }
  )(withStyles(useStyles)(Credits));