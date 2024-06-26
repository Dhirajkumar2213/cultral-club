
import logo from "../images/logo.png"
function About(){


   
  return(

      <>

      <div className="">
            <div className="p-20 shadow-xl text-white " > 
          <h1 className=" text-5xl mt-4 underline hover:underline-offset-8 justify-center text-center font-serif "> PUNJABI UNIVERSITY,PATIALA</h1> 
          
          <div className="m-20  text-justify flex">
              <div><img src=" https://w0.peakpx.com/wallpaper/34/12/HD-wallpaper-punjabi-university-architecture-beautiful-logo-patiala-pond-punjabi-university.jpg" className="rounded" alt="punjabi university ,patiala  "/></div>
              <p className= "w-[75%] font-semibold shadow-lg shadow-red-500 md:shadow-xl  p-8 text-2xl text-clip overflow-hidden ... justify-center font-sans " >Punjab Assembly established Punjabi University, Patiala under the Punjab Act No. 35 of 1961. Dr. S. Radhakrishnan, the then President of India laid foundation of Punjabi University on June 24, 1962. He preached, "The institutes of higher education share the burden of nation-building in a critically important sense. Our aim is a strong, free and democratic India where every citizen has an equal place and full opportunity of growth. In this task, a vast responsibility rests on our universities." Established on April 30, 1962 in the erstwhile princely state of Patiala with the main objective of furthering the cause of Punjabi language, art and literature, Punjabi University has since evolved into the largest University in the state. This is the second University in the world to be named after a language, the first being Hebrew University of Israel. Its vision is to establish and incorporate a University for the advancement of Punjabi studies and development of Punjabi language as a medium of instruction or otherwise for providing instruction in humanistic and scientific subjects and generally for the promotion of education and research. The University started working from its present lush green, pollution free, 316 acres campus since 1965. </p>
               </div>
</div>
          </div> 
         
          <div className="p-20 shadow-xl text-white">
              <h1 className=" text-5xl underline hover:underline-offset-8  justify-center text-center font-serif "> ELECTRONIC AND COMMUNICATION DEPARTMENT</h1>
              <div>
                  <h3 className=" text-4xl pt-10 underline hover:underline-offset-8  justify-center text-center font-serif "> THE DEPARTMENT</h3>

                  <div className="text-justify flex m-20">
                    
                 <p className=" w-[75%] shadow-lg shadow-red-500 md:shadow-xl  p-8 text-2xl  text-clip overflow-hidden ... text-justify justify-center font-semibold font-sans"> About the Department: The Electronics and Communication Engineering was one of the branches started under the aegis of University College of Engineering, established in the year 2003, at Punjabi University, Patiala (Main Campus). The branch had made a modest beginning with a single under-graduate course of four-year duration, viz., Bachelor of Technology (B.Tech.) in Electronics and Communication Engineering. All the courses of the Department are approved by AICTE.Initially University’s jurisdiction area was fixed as the 16 km radius having only 9 colleges. In 1969, it grew into an affiliating university, with 43 colleges affiliated to it. Now the university caters to the educational needs of nine Districts of Punjab. Over the time since its inception, the University has evolved into a multi-faceted and multi-faculty educational institution for the promotion of higher education and research in Humanities, Arts, Sciences, Engineering Languages, Technology and many more. Spread over 600 acres of land, its 1500+ teachers are imparting instruction and guidance to nearly 14,000+ students in a multi-faceted, multi-pronged and multi-faculty environment comprising 70+ Teaching and Research Departments/Chairs on its Campus, 27 Regional Centre/ Neighbourhood Campuses/Constituent Colleges and 274 Colleges affiliated to it.</p>
               
                 <div><img src="https://images.static-collegedunia.com/public/college_data/images/campusimage/1410348081uce6.jpg"className=" rounded"alt="ucoe"/></div> </div>
      </div></div>
      <div  className="p-20 shadow-xl text-white">

          <h1 className=" text-5xl underline hover:underline-offset-8 justify-center text-center font-serif "> CULTURAL CLUB</h1>
          <div className="text-justify flex m-20 text-white ">
              <div className="w-[84%]"><img src={logo} alt="cultural-club" className="rounded"/></div>
            <p className="shadow-lg w-[80%] shadow-red-500 md:shadow-xl p-8 text-2xl  text-clip overflow-hidden ... text-justify justify-center font-semibold font-sans">Campus clubs are a vital part of the college experience, offering students the opportunity to engage with others who share their interests, explore new passions, and develop valuable skills. For students from diverse cultural backgrounds, college clubs are especially important as they provide a welcoming and inclusive environment where they can feel comfortable and supported.

They provide a platform for students to come together and share their experiences and perspectives, fostering a sense of community and understanding. Let’s take a look at all the benefits of diverse college clubs and specific opportunities for you to get involved.</p>
</div>
      </div>
    

      </>
  );
}
export default About;