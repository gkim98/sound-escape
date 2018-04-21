import React from 'react';
import Draggable, {DraggableCore} from 'react-draggable';

class SoundSource extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            deltaPosition: {
                x: 0,
                y: 0,
            },
            delay: 0
        }
    }

    handleDrag = (e, ui) => {
        const {x, y} = this.state.deltaPosition;
        this.setState({
            deltaPosition: {
                x: x + ui.deltaX,
                y: y + ui.deltaY
            }
        });
    }

    render() {
        const { deltaPosition } = this.state;
        return (
            <div>
                <Draggable
                    onDrag={this.handleDrag} 
                >
                    <div style={{position: 'absolute', top: '50px', left: '50px'}}>
                        <div className='handle'>
                            x: {deltaPosition.x},
                            y: {deltaPosition.y}
                        </div>
                        <div className='source'></div>
                    </div>
                </Draggable>
            </div>
        )
    }
}

export default SoundSource;

