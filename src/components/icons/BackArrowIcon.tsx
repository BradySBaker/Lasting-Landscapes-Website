function BackArrow ({classname, onClick}: {classname: string, onClick?: React.MouseEventHandler<SVGSVGElement>}) {
    return(
    <svg onClick={onClick} className={classname} version="1.0"
        viewBox="0 0 512.000000 512.000000"
        preserveAspectRatio="xMidYMid meet">
        <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
        stroke="none">
        <path d="M2125 4800 c-68 -14 -150 -49 -211 -89 -40 -25 -332 -316 -886 -878
        -454 -462 -850 -867 -878 -899 -185 -211 -198 -521 -32 -743 43 -57 1616
        -1661 1704 -1737 232 -202 585 -188 804 30 193 193 229 495 86 730 -23 39
        -151 178 -369 400 l-335 341 419 5 c230 3 801 6 1268 8 514 1 875 7 914 13
        142 22 249 78 346 181 316 334 147 884 -303 984 -71 16 -168 17 -1351 10
        l-1274 -7 349 358 c299 306 354 368 386 428 48 93 68 174 68 282 0 157 -51
        289 -156 402 -112 120 -244 181 -409 187 -55 2 -118 -1 -140 -6z"/>
        </g>
    </svg>
    )
}

export default BackArrow;