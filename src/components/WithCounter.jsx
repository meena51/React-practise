// WithCounter.js
import React, { Component } from "react";

const WithCounter = (OriginalCom) => {
    class NewComponent extends Component {
        constructor(props) {
            super(props);
            this.state = {
                count: 0
            };
        }

        incrementCount = () => {
            this.setState(prevState => ({
                count: prevState.count + 1
            }));
        };

        render() {
            return (
                <OriginalCom
                    count={this.state.count}
                    incrementCount={this.incrementCount}
                    {...this.props}
                />
            );
        }
    }

    return NewComponent;
};

export default WithCounter;
