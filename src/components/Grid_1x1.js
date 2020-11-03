import React from 'react'
import "./Grid.css"
//TODO
class Grid_1x1 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const transform = function (row_index, col_index) {
            let style = {};
            if (row_index === 0 && col_index === 0) {
                style = {
                    "border-top": "1.5px solid transparent",
                    "border-bottom": "1.5px solid #999",
                    "border-left": "1.5px solid transparent",
                    "border-right": "1.5px solid #999"
                }
            }
            else if (row_index === 0) {
                style = {
                    "border-top": "1.5px solid transparent",
                    "border-bottom": "1.5px solid #999",
                    "border-left": "1.5px solid #999",
                    "border-right": "1.5px solid #999"
                }
            }
            else if (col_index === 0) {
                style = {
                    "border-top": "1.5px solid #999",
                    "border-bottom": "1.5px solid #999",
                    "border-left": "1.5px solid transparent",
                    "border-right": "1.5px solid #999"
                }
            }
            else if (row_index === 8 && col_index === 8) {
                style = {
                    "border-top": "1.5px solid #999",
                    "border-bottom": "1.5px solid transparent",
                    "border-left": "1.5px solid #999",
                    "border-right": "1.5px solid transparent"
                }
            }
            else if (row_index === 8) {
                style = {
                    "border-top": "1.5px solid #999",
                    "border-bottom": "1.5px solid transparent",
                    "border-left": "1.5px solid #999",
                    "border-right": "1.5px solid #999"
                }
            }
            else if (col_index === 8) {
                style = {
                    "border-top": "1.5px solid #999",
                    "border-bottom": "1.5px solid #999",
                    "border-left": "1.5px solid #999",
                    "border-right": "1.5px solid transparent"
                }
            }
            else {
                style = {
                    "border-top": "1.5px solid #999",
                    "border-bottom": "1.5px solid #999",
                    "border-left": "1.5px solid #999",
                    "border-right": "1.5px solid #999"
                }
            }

            return style;
        }
        
        const gridStyle = {
            color: (this.props.selectedGrid.row_index === this.props.row_index && this.props.selectedGrid.col_index === this.props.col_index) || this.props.conflicted ? "#FFF" : this.props.fixed ? "#666" : "#6CC",
            backgroundColor: this.props.selectedGrid.row_index === this.props.row_index && this.props.selectedGrid.col_index === this.props.col_index ? "#333" : this.props.conflicted ? "#E77" : "#FFF",
        };
        return (
            <div className="grid_1x1" 
            id={`grid-${this.props.row_index}*${this.props.col_index}`} 
            tabindex="1" style={gridStyle} 
            onClick={() => this.props.handle_grid_1x1_click(this.props.row_index, this.props.col_index)}
            style = {transform(this.props.row_index, this.props.col_index)}>
                { this.props.value === "0" ? "" : this.props.value}
            </div>
        );
    }
}

// Useful hints:
// for React Component:
// const gridStyle = {
//     color: (this.props.selectedGrid.row_index === this.props.row_index && this.props.selectedGrid.col_index === this.props.col_index) || this.props.conflicted ? "#FFF" : this.props.fixed ? "#666" : "#6CC",
//     backgroundColor: this.props.selectedGrid.row_index === this.props.row_index && this.props.selectedGrid.col_index === this.props.col_index ? "#333" : this.props.conflicted ? "#E77" : "#FFF",
// };
// return (
//     <div className="grid_1x1" id={`grid-${this.props.row_index}*${this.props.col_index}`} tabindex="1" style={gridStyle} onClick={() => this.props.handle_grid_1x1_click(this.props.row_index, this.props.col_index)}>
//         { this.props.value === "0" ? "" : this.props.value}
//     </div>
// );

// for React Hook:
// const gridStyle = {
//     color: (props.selectedGrid.row_index === props.row_index && props.selectedGrid.col_index === props.col_index) || props.conflicted ? "#FFF" : props.fixed ? "#666" : "#6CC",
//     backgroundColor: props.selectedGrid.row_index === props.row_index && props.selectedGrid.col_index === props.col_index ? "#333" : props.conflicted ? "#E77" : "#FFF",
// };
// return (
//     <div className="grid_1x1" id={`grid-${props.row_index}*${props.col_index}`} tabindex="1" style={gridStyle} onClick={() => props.handle_grid_1x1_click(props.row_index, props.col_index)}>
//         { props.value === "0" ? "" : props.value}
//     </div>
// );

export default Grid_1x1;