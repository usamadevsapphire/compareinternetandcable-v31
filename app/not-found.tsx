import Link from 'next/link'
export default function NotFound() {
  return (
    <div style={{minHeight:'60vh',display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column',gap:16,textAlign:'center',padding:'60px 24px'}}>
      <div style={{fontFamily:'var(--font-display)',fontSize:80,fontWeight:800,color:'rgba(255,255,255,0.1)',lineHeight:1}}>404</div>
      <h1 style={{fontFamily:'var(--font-display)',fontSize:28,fontWeight:800,color:'white'}}>Page Not Found</h1>
      <p style={{color:'rgba(255,255,255,0.45)',fontSize:16,maxWidth:400}}>The page you're looking for doesn't exist or has been moved.</p>
      <Link href="/" style={{background:'linear-gradient(135deg,#7c3aed,#5b21b6)',color:'white',padding:'12px 28px',borderRadius:10,fontFamily:'var(--font-display)',fontWeight:700,textDecoration:'none',marginTop:8}}>
        Back to Home
      </Link>
    </div>
  )
}
