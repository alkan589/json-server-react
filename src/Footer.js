

const Footer = () => {
    const today=new Date()
  return (
    <footer>
    <p>CopyRight {today.getFullYear()}</p>  
    </footer>
  )
}

export default Footer
