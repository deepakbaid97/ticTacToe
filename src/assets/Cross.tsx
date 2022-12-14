import IPiece from "./IPiece";


const Cross = ({fill}:IPiece) => {
    return (
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
            width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000"
            preserveAspectRatio="xMidYMid meet">

            <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                fill="#000000" stroke="none">
                <path fill={fill} d="M185 5111 c-69 -21 -131 -74 -166 -141 -28 -53 -25 -162 5 -220 14
-26 96 -118 199 -222 l176 -178 -185 -187 c-197 -200 -219 -232 -219 -323 0
-137 116 -252 255 -253 99 -1 129 20 330 222 l179 181 181 -179 c99 -98 194
-185 211 -194 129 -66 278 -22 348 102 25 46 30 66 30 120 -1 99 -22 132 -225
336 l-179 180 181 180 c125 125 188 194 202 225 25 54 27 149 5 201 -22 50
-74 106 -122 132 -55 29 -174 30 -226 3 -19 -10 -117 -100 -217 -199 l-183
-181 -187 185 c-159 157 -196 188 -237 202 -52 18 -113 21 -156 8z"/>

            </g>
        </svg>
    );
}

export default Cross;