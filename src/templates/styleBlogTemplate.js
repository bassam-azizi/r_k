import Styled from '@emotion/styled'


export const Wrapper = Styled.div`
	position: relative;
	width: 80%;
	margin: 94px auto;
    background: #e5e5e5;
	border-radius: 10px;
	.shareBtn{
		text-decoration: none;
		color: #222;
		position: absolute;
		top: 18px;
		right: 22px;
		:hover{
			color: #7F8A64;
		}
	}

	.header{
		padding: 83px 150px;
		display: block;
		text-align: left;
	    font-size: 24px;
	  }

	.pubdate{
		color: #858484;
		font-size: 14px;
	}

	.body{
		padding: 0 98px 98px;
	    color: #333;

	    .blogImg{
			max-width: 700px;
			margin: 0 49px 70px;
			border-radius: 10px;
		}

	    & > p{
	        line-height: 52px;
	        font-weight: 400;
	        padding: 0 3rem;
	        font-size: 17px;
	    }
	  }
`