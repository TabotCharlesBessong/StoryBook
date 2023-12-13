
type Props = {
  // some description
  variant?: 'green' | 'yellow' | 'red'
}

// some explanations on how the light component operate
const Light = ({variant='green'}:Props) => {
  return (
    <div style={{display:'flex',alignItems:'center',justifyContent:'space-evenly'}} >
      <div style={{
        padding: 20,
        backgroundColor:variant,
        borderRadius: '50%',
        width: 30,
        height: 30
      }} />
    </div>
  )
}

export default Light
