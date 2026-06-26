import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {

  const users = [
    {
      img: 'https://plus.unsplash.com/premium_photo-1672691612717-954cdfaaa8c5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: '',
      color:'royalblue',
      tag: 'Satisfied'
    },
    {
      img: 'https://images.picxy.com/cache/2019/7/19/b0d3e7bd8b6ac56e89b1163731a280cc.jpg',
      color:'lightseagreen',
      intro: '',
      tag: 'Underserved'
    },
    {
      img: 'https://www.varunpatelphotography.com/blog/wp-content/uploads/2020/06/265A3263.jpg',
      color:'orange',
      intro: '',
      tag: 'Underbanked'
    },
    {
      img: 'https://images.unsplash.com/photo-1600275669439-14e40452d20b?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      color:'pink',
      intro: '',
      tag: 'Underwear'
    },
    {
      img:'https://images.unsplash.com/photo-1498758536662-35b82cd15e29?q=80&w=2576&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      color:'black',
      tag:'Average'
    }
  ]
  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  )
}

export default App