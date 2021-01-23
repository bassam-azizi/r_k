import React, {useState, useEffect, useRef} from "react"
import { graphql, useStaticQuery} from 'gatsby'
import Img from 'gatsby-image'
import Styled from '@emotion/styled'

// Component Style
const Wrapper = Styled.div`
    display: flex;
    flex-wrap:  wrap;
    width: 55%;
`
const Post = Styled.div``


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
                        pubdate
                        featuredImg{
                            childImageSharp{
                                fixed(width: 300, height: 250){
                                    ...GatsbyImageSharpFixed
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
    const post1 = allposts.slice(0,4) ;
    const x = useRef(0);
    const t = useRef([...post1]);
    
    
    const post2 = allposts.slice(4,8);
    
    const [posts, setPosts] = useState([]);
    
    useEffect( () =>{
        const interval = setInterval( () =>{
            setPosts(()=>{
                console.log(t.current);
                console.log(x.current);
                t.current[x.current] = post2[x.current];
                if(t.current === post2){
                    t.current = [ ...post1];
                }
                // console.log(posts[0].node.id);
                return t.current;
            })
            x.current += 1;
            if(x.current>3){
                x.current = 0;
            }
        }, 5000);
        return () => clearInterval(interval);
    })
    
    // const setPosts = (posts, action) =>{
    //     console.log(x.current);
    //     console.log(action);
    //     posts[x.current] = post2[x.current];
    //     if(posts === post2){
    //         posts = post1;
    //     }
    //     if(x.current===5){
    //         x.current = 0;
    //     }
    //     console.log(posts[x.current].node.id);
    //     return posts;
    // }
    // var [posts, dispatch] = useReducer(setPosts, post1);
    
    // useEffect(()=>{
        
    //     const interval  = setInterval(()=>{
    //         dispatch();
    //         x.current += 1;
    //     },5000);
    //     // console.log(post1);
    //     // console.log(post2);
    //     return () => clearInterval(interval);
        
    // })

    return(
        <Wrapper>
            <Post>
                <Img fixed={(posts.length===0)? allposts[0].node.featuredImg.childImageSharp.fixed :
                    posts[0].node.featuredImg.childImageSharp.fixed} />
            </Post>
            <Post>
                <Img fixed={(posts.length===0)? allposts[1].node.featuredImg.childImageSharp.fixed :
                    posts[1].node.featuredImg.childImageSharp.fixed} />
            </Post>
            <Post>
                <Img fixed={(posts.length===0)? allposts[2].node.featuredImg.childImageSharp.fixed :
                    posts[2].node.featuredImg.childImageSharp.fixed} />
            </Post>
            <Post>
                <Img fixed={(posts.length===0)? allposts[3].node.featuredImg.childImageSharp.fixed :
                    posts[3].node.featuredImg.childImageSharp.fixed} />
            </Post>
        </Wrapper>
    )
}

export default FeaturedNews