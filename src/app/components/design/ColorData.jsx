const colorMap = {
    primary: "bg-red-400",
    secondary: "bg-blue-400",
    accent: "bg-yellow-500",
    accent2: "bg-green-500",
    accent3: "bg-purple-500",
    accent4: "bg-rose-500",
};

const Circle = ({ variant='primary'}) => {
    let bgColor = colorMap[variant] || colorMap['primary'];
    return <div className={`${bgColor} h-36 w-36 rounded-full`}></div>
}


export default function ColorData() {
    return (
       <>
           <Circle variant="primary" />
           <p>()</p>
       </>
   )
}