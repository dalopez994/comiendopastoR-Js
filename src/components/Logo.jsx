import imgLogo from "../assets/img/comiendopasto_logo.png"

const Logo = () => {
    const amount = 4;
    return (
        <>
        <img 
        style={{width:100}}
        src={imgLogo} alt="logo"/>
        </>
    )
}

export default Logo;