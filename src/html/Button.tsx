type ButtonProps ={
    variant: "primary" | "secondary"
    children:string;
  
} & Omit<React.ComponentProps<'button'>,'children'> //Children props'unu sadece string yapmak icin bu syntax kullanilir.


const CustomButton = ({variant,children,...rest}:ButtonProps) => {
  return (
    <button className={`class-width-${variant}`} {...rest}>{children}</button>
  )
}

export default CustomButton