import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography/Typography";
import Grid from "@material-ui/core/Grid/Grid";
import Slider from "@material-ui/core/Slider";

const styles = { "OceanProfile": { "backgroundColor": "#fff", "color": "#21c0fc", "width": "100vw", "position": "fixed" }, "OceanProfile_h6": { "color": "#21c0fc", "fontSize": "18px", "textAlign": "left", "marginBottom": "10px" }, "OceanProfile_h6_strong": { "color": "#21c0fc", "fontWeight": "bold" }, "OceanProfile__OceanIcons": { "marginRight": "40px", "marginLeft": "20px", "height": "320px" }, "OceanProfile__OceanText": { "maxWidth": "500px", "marginRight": "50px" }, "OceanProfile__OceanSliders": { "marginLeft": "auto", "marginRight": "auto", "display": "flex" }, "OceanProfile__OceanSliders__textSliderText": { "color": "#21c0fc", "width": "120px", "textAlign": "center", "height": "auto", "overflow": "visible" }, "OceanProfile__OceanSliders__textSliderText_p": { "color": "#21c0fc", "fontSize": "12px", "textAlign": "center", "width": "100%" }, "OceanProfile__OceanSliders__textSliderText__iconText": { "width": "100%", "textAlign": "center", "marginTop": "-90px" }, "OceanProfile__OceanSliders__textSliderText__sliderContainer": { "height": "200px", "display": "inline-flex", "paddingTop": "50px" }, "OceanProfile__OceanSliders__textSliderText__slider": { "transform": "rotate(270deg)", "height": "5px", "width": "92px", "marginRight": "40px" }, "OceanProfile__OceanSliders__textSliderText_div_class___MuiSlider_track": { "backgroundColor": "#21c0fc" }, "OceanProfile__OceanSliders__textSliderText_div_class___MuiSlider_track___class___MuiSlider_trackBefore": { "borderTopLeftRadius": "0", "borderBottomLeftRadius": "0" }, "OceanProfile__OceanSliders__textSliderText_div_class___MuiSlider_track___class___MuiSlider_trackAfter": { "opacity": "0", "borderTopRightRadius": "0", "borderBottomRightRadius": "0" }, "OceanProfile__OceanSliders__textSliderText_button_class___MuiButtonBase": { "width": "30px", "height": "30px", "backgroundColor": "#21c0fc", "border": "solid #21c0fc 3px", "display": "none" }, "OceanProfile__OceanSliders__textSliderText_button_class___MuiButtonBase___class___MuiSlider_activated": { "width": "30px", "height": "30px", "backgroundColor": "#21c0fc", "border": "solid #21c0fc 3px", "boxShadow": "none" }, "content__OceanProfile": { "marginLeft": "-100px", "position": "relative" }, "content__OceanProfile_h6": { "color": "#21c0fc", "fontSize": "18px", "textAlign": "left", "marginBottom": "10px" }, "content__OceanProfile_h6_strong": { "color": "#21c0fc", "fontWeight": "bold" } };

class OceanProfile extends React.Component {

  render() {
    let traits = this.props.subject.traits;
    let tname = this.props.subject.name;
    return (
      <div className={styles.OceanProfile}>
        <div>
          <p><strong>{tname}'s OCEAN Profile</strong></p>
        </div>
        <Grid container alignItems="center">
          <div className={styles.OceanSliders}>
            <div className="">
              <div className={styles.textSliderText}>
                <Typography>{Math.round(traits.openness * 100)}%</Typography>
                <div className={styles.sliderContainer}>
                  <div className={styles.slider}>
                    <Slider value={traits.openness * 100} aria-labelledby="label" />
                  </div>
                </div>
                <div className={styles.iconText}>
                  <img src="/imgs/openness.svg" alt="openness" />
                  <Typography>Openness</Typography>
                </div>
              </div>
            </div>
            <div className="">
              <div className={styles.textSliderText}>
                <Typography>{Math.round(traits.conscientiousness * 100)}%</Typography>
                <div className={styles.sliderContainer}>
                  <div className={styles.slider}>
                    <Slider value={traits.conscientiousness * 100} aria-labelledby="label" />
                  </div>
                </div>
                <div className={styles.iconText}>
                  <img src="/imgs/conscientiousness.svg" alt="conscientiousness" />
                  <Typography>Conscientiousness</Typography>
                </div>
              </div>
            </div>
            <div className="">
              <div className={styles.textSliderText}>
                <Typography>{Math.round(traits.extraversion * 100)}%</Typography>
                <div className={styles.sliderContainer}>
                  <div className={styles.slider}>
                    <Slider value={traits.extraversion * 100} aria-labelledby="label" />
                  </div>
                </div>
                <div className={styles.iconText}>
                  <img src="/imgs/extroversion.svg" alt="extraversion" />
                  <Typography>Extroversion</Typography>
                </div>
              </div>
            </div>
            <div className="">
              <div className={styles.textSliderText}>
                <Typography>{Math.round(traits.agreeableness * 100)}%</Typography>
                <div className={styles.sliderContainer}>
                  <div className={styles.slider}>
                    <Slider value={traits.agreeableness * 100} aria-labelledby="label" />
                  </div>
                </div>
                <div className={styles.iconText}>
                  <img src="/imgs/agreeableness.svg" alt="agreeableness" />
                  <Typography>Agreeableness</Typography>
                </div>
              </div>
            </div>
            <div className="">
              <div className={styles.textSliderText}>
                <Typography>{Math.round(traits.neuroticism * 100)}%</Typography>
                <div className={styles.sliderContainer}>
                  <div className={styles.slider}>
                    <Slider value={traits.neuroticism * 100} aria-labelledby="label" />
                  </div>
                </div>
                <div className={styles.iconText}>
                  <img src="/imgs/neuroticism.svg" alt="neuroticism" />
                  <Typography>Neuroticism</Typography>
                </div>
              </div>
            </div>
          </div>
        </Grid>
      </div>
    );
  }
}

OceanProfile.propTypes = {
  classes: PropTypes.object,
  subject: PropTypes.object
};

export default OceanProfile;
