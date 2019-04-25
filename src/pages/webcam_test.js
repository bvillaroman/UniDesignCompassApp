import React from "react";
import Webcam from "react-webcam";
import { Button} from 'react-bootstrap';


class Webby extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cam: "",
            screenshot: "",
        }

    }
    onCapture = () => {
        this.setState({
            screenshot: this.state.cam.getScreenshot()
        })
        console.log(this.state.screenshot);
    }

    setRef = cam => {
        this.setState({
            cam: cam
        });
    }

    render() {
        return (
            <div>
            <Webcam
                audio={false}
                height={350}
                ref={this.setRef}
                screenshotFormat="image/jpeg"
                width={350}
            ></Webcam>
            <Button onClick={this.onCapture}>
                Capture
            </Button>
            </div>
        );
    }
}

export default Webby;