import { AiFillGithub,AiFillLinkedin , AiFillFacebook,AiOutlineMail } from 'react-icons/ai'
import { BsDownload } from 'react-icons/bs'
import { GoLocation } from 'react-icons/go'


const Sidebar = () => {
	const sendMail = () => {
		const mailto =
		  "mailto:bcs.12.41@gmail.com?subject=Test subject&body=Body content";
		window.location.href = mailto;
	  }
	return (
		
		<>
			<img
				className="mx-auto border rounded-full"
				src="/images/profilePic.jpg"
				alt="profilePic"
				style={{ width: '128px', height: '128px' }}
			/>

			<h3 >
				<span >Nouman </span>Naseer
			</h3>
			<p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-black-200">Web Developer</p>

			<a
				href="/assets/Resume.pdf"
				download="Resume.pdf"
				className="flex items-center justify-center px-2 py-1 my-2 bg-gray-200 rounded-full cursor-pointer dark:bg-black-200"
			>
			
			    <BsDownload>   </BsDownload>
				<span>Resume</span>
			</a>
			
			<div className="py-4 my-5 bg-gray-200 dark:bg-black-200" style={{ marginLeft: '-1rem', marginRight: '-1rem' }}>
				<div className="flex items-center justify-center">
					<GoLocation className="mr-2" /> <span>Stavanger, Norway</span>
				</div>
				<div className="flex items-center justify-center">
				<button onClick={sendMail} style={{fontSize:'13px',textDecoration:'underline',borderStyle:'none'}} >noumannaseer120893@gmail.com</button>
					<p className="my-2 " style={{fontSize:'13px',textDecoration:'underline'}}></p></div>
				
				<p className="my-2"> +47-40564124</p>
			</div>
			<div className="flex justify-around w-9/12 mx-auto my-5 md:w-full ">
			<a href="https://www.linkedin.com/in/nouman-naseer-37819272/" target="_blank" rel="noreferrer" aria-label="Github">
					<AiFillLinkedin className="w-8 h-8 cursor-pointer" />
				</a>
			<a href="https://github.com/NoumanNaseer1" target="_blank" rel="noreferrer" aria-label="Github">
					<AiFillGithub className="w-8 h-8 cursor-pointer" />
				</a>
				<a href="https://www.facebook.com/noumannaseer.gujjar" target="_blank" rel="noreferrer"aria-label="Facebook">
					<AiFillFacebook className="w-8 h-8 cursor-pointer" />
				</a>
				
				
			</div>
			
			
			
			
		</>
	)
}

export default Sidebar
