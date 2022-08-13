const USER_API = "https://my-json-server.typicode.com/Jeck99/fake-server/users";

const userPicArray= [
  'https://img.freepik.com/free-photo/headshot-beautiful-dark-skinned-curly-has-pleased-expression-rejoices-success-enjoys-spare-time-wears-casual-t-shirt-isolated-yellow-wall-people-positive-emotions-feelings-concept_273609-27729.jpg?w=2000',
  'https://media.istockphoto.com/photos/very-happy-young-man-man-picture-id1332373959?b=1&k=20&m=1332373959&s=170667a&w=0&h=TKCIoc778sQTiiNFzS3mm_aUMIGcZ6VAN4Cn8mz4UaI=',
  'https://thumbs.dreamstime.com/b/smiling-young-brunette-woman-girl-yellow-sweater-posing-isolated-pastel-pink-background-studio-portrait-people-sincere-190820346.jpg',
  'https://t3.ftcdn.net/jpg/04/85/60/40/360_F_485604079_IJ4Q1MvWKbMgKZRVDpRFO964gl6vHw9d.jpg',
  'https://media.istockphoto.com/photos/portrait-of-happy-smiling-young-indian-man-picture-id1300142705?b=1&k=20&m=1300142705&s=170667a&w=0&h=n4maTRnqNGzonnnuoQjJN4hVTs9-fmxLP-cpElYQPek=',
  'https://st3.depositphotos.com/5228995/18959/i/600/depositphotos_189593618-stock-photo-charming-bright-girl-in-sweater.jpg',
  'https://media.istockphoto.com/photos/young-brazilian-man-wearing-blue-tshirt-standing-over-isolated-white-picture-id1162358018?b=1&k=20&m=1162358018&s=170667a&w=0&h=nzvOZFLddbTKYVX2V-L6aBHNOhtS6bwO5ssUg-9AOI4=',
  'https://media.istockphoto.com/photos/head-shot-portrait-smiling-african-american-man-in-glasses-picture-id1254214857?k=20&m=1254214857&s=612x612&w=0&h=xtfnW9YG6xqqzQBEtM-tHYO5a7ogl0i2XOGi4l0aTXs=',
  'https://media.istockphoto.com/photos/portrait-business-woman-asian-on-blue-background-picture-id1166423321?k=20&m=1166423321&s=170667a&w=0&h=tZwKLuu6UXk01RlA7jtiwIoqmGhLrKgJS9XWQSHqQDo=',
  'https://media.istockphoto.com/photos/young-handsome-hispanic-man-against-green-background-picture-id964163202?k=20&m=964163202&s=612x612&w=0&h=rjQGC35pV-bWiMof3DB3QNAzwxQNaWSOJfWHeQZzYno='
]


async function getUserData() {
  let counter=0
//   gifDiv.innerHTML= '<img style= "width:7vw" src= /images/loading.gif> </img>'
  try {
    let arrayObj = await fetch(USER_API).then((res) => res.json());
    console.log(arrayObj)
    arrayObj.forEach((element,i) => {
        teamDiv.innerHTML +=
        `<div class="card col-md-4 col-sm-12 border-0">
        <img src="${userPicArray[i] ? userPicArray[i] : userPicArray[0]}" alt="wrapkit" class="card-img img-fluid border-none  h-70 w-70" />
        <div class="card-body card-page">
        <h3 class="card-title">${element.name["first"]} ${element.name["last"]}</h3>
        <h4 class="card-title">${element.email}</h4>
        <h4 class="card-title">${element.phone} </h4>
        
       </div>
    </div>`; 


    }) ;
  } catch (err) {
    console.log(err);
  } finally {
    // gifDiv.innerHTML= ""
  }
}
getUserData();