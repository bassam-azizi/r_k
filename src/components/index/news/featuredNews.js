import React from "react"
import Post from './post'
import { graphql, useStaticQuery} from 'gatsby'
import Styled from '@emotion/styled'

// Component Style
const Wrapper = Styled.div`
    display: inline-block;
    position: relative;
    // width:fit-content;
    width: 62.6%;
`
const Container = Styled.div`
    display: flex;
    flex-direction: row-reverse;
    flex-wrap:  wrap;
    position: relative;
`
const Triangle = Styled.div`
    width: 0;
    height: 0;
    border-right: 130px solid transparent;
    border-top: 660px solid #fff;
    position: absolute;
    transform: rotateZ(0deg);
    top: 0;
    left: 0;
`



// The Component
const FeaturedNews = () =>{
    const data = useStaticQuery(graphql`
        query{
            allStrapiBlogpost(
                sort: { order: DESC, fields: [pubdate] }
                limit: 1000
            ){
                edges{
                    node{
                        name
                        Slug
                        id
                        pubdate(formatString:"MMMM Do, YYYY")
                        featuredImg{
                            childImageSharp{
                                fluid(maxWidth: 600){
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                        body
                    }
                }
            }
        }
    `)   
    
    const allposts = data.allStrapiBlogpost.edges ;
    const posts = allposts.slice(0,4);
    // const post1 = allposts.slice(0,4) ;
    // const x = useRef(0);
    // const t = useRef([...post1]);
    // const post2 = allposts.slice(4,8);
    // const [posts, setPosts] = useState([]);
    
    // useEffect( () =>{
    //     const interval = setInterval( () =>{
    //         setPosts(()=>{
    //             t.current[x.current] = post2[x.current];
    //             if(t.current === post2){
    //                 t.current = [ ...post1];
    //             }
    //             return t.current;
    //         })
    //         x.current += 1;
    //         if(x.current>3){
    //             x.current = 0;
    //         }
    //     }, 5000);
    //     return () => clearInterval(interval);
    // })
    
    return(
        <Wrapper>
            <Container>
                {posts.map(post=>(
                    <Post data={post} key={post.node.id} />
                ))}
            </Container>
            <Triangle />
        </Wrapper>
    )
}

export default FeaturedNews