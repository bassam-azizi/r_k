import React from "react"
import { useIntl } from "gatsby-plugin-intl"

import Post from './post'
import Styled from '@emotion/styled'

// Component Style
const Wrapper = Styled.div`
    grid-column: 5 / -1 ;
    position: relative;
    padding: 2.4rem 0 0;

    @media (max-width: 1178px){
        grid-column: 5 / -1 ;
    }
    @media (max-width: 1028px){
        grid-column: 1 / -1 ;
        padding-top: 70px;
    }

`
const Container = Styled.div`
    display: flex;
    flex-direction: row-reverse;
    flex-wrap:  wrap;
    position: relative;

    @media (max-width: 600px){
        flex-direction: column;
    }

    .emptyDiv{
        height: 662px;
        width: 100%;
        display: grid;
        justify-content: center;
        align-items: center;
        background: #8B7C6564;
        z-index: 100;

        p{
            color: #fff;
            letter-spacing: 1.1px;
            text-shadow: .07px 0.0007px #fff;
        }
    }
`
const Triangle = Styled.div`
    width: 0;
    height: 0;
    border-right: 130px solid transparent;
    border-top: 660px solid #fff ;
    position: absolute;
    transform: ${props => props.locale === "ar"? "scaleX(-1)" : "unset" };
    top: 0;
    left: ${props => props.locale ==="ar"? "unset":"0"};
    right: ${props => props.locale ==="ar"? "0":"unset"};
    z-index: 200;

    @media (max-width:1028px){
        display: none;
    }
`



// The Component
const PostsCollection = ({data}) =>{
    const posts = data.data.allStrapiBlogpost;    
    
    const postsRender= () =>{
            if(posts.edges.length<4){
                    return <div className="emptyDiv"><p>Sorry!, There's no blog posts yet</p></div>
                }
            else{
                    return posts.edges.map(post=>(
                        <Post data={post} key={post.node.id} />
                    ))}
                }
    return(
        <Wrapper>
            <Container>
                {postsRender()}
            <Triangle locale={useIntl().locale}/>
            </Container>
        </Wrapper>
    )
}

export default PostsCollection

// **********Function used for dynamic featured posts******************

    // const allposts = data.allStrapiBlogpost.edges ;
    // const posts = allposts.slice(0,4);
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