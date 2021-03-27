import Styled from '@emotion/styled'


export const Wrapper = Styled.div `
	background: #11ff1f09; 
	
	.container{
		background: #fff;
		position: relative;
		max-width: 770px;
		padding: 94px 45px;
		margin: 0 auto;

		@media (max-width:800px){
			width: 80%;
		}
		@media (max-width: 768px){
			padding-bottom: 45px;
			width: 95%;
		}
		@media (max-width: 480px){
			width: 100%;
		}
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
	}

	.header{
		padding: 70px 0;
		display: block;
		text-align: left;
	    font-size: 24px;
	  }

	.pubdate{
		color: #858484;
		font-size: 14px;
	}

	.body{
		padding: 0 0 98px;
	    color: #333;

	    .blogImg{
			max-width: 720px;
			margin: 0 0 70px;
			border-radius: 10px;
		}

	    & > p{
	        line-height: 52px;
	        font-weight: 400;
	        padding: 0;
	        font-size: 17px;
	    }
	  }
`