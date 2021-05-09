const submit = document.getElementById('Submit');
const city = document.getElementById('city');

const temp = document.getElementById('temp');
const temp_s = document.getElementById('temp_s');

const city_name = document.getElementById('city_name');

const datahide = document.querySelector('.Stet');
const stet = document.getElementById('stet');  


const getInfo = async(event) =>{
    event.preventDefault();
    
    let cityval = city.value;
    if(cityval === ""){
        city_name.innerText ="Please enter city name";
        temp.innerText ="0";
        datahide.classList.add('datahide');
        temp_s.innerHTML =
            "<lottie-player src='https://assets6.lottiefiles.com/datafiles/kr7vxsZXeUCocfV/data.json'  background='transparent'  speed='1'  style='width: 120px; height: 120px;'  loop  autoplay></lottie-player>"
    }
    else{
        try{
            let url = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityval}&appid="Enter your one appid here"`;
            const response = await fetch(url);
            const data = await response.json(); 
            const arrData=[data]

            temp.innerText = arrData[0].main.temp;
            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;

            const tempmod = arrData[0].weather[0].main;

            datahide.classList.remove('datahide');
            
            stet.innerText = tempmod;


            if(tempmod == "Clear"){
                temp_s.innerHTML =
                "<lottie-player src='https://assets3.lottiefiles.com/private_files/lf30_iugenddu.json'  background='transparent'  speed='1'  style='width: 120px; height: 120px;'  loop  autoplay></lottie-player>"
            }
        
            else if(tempmod == "Haze"){
                temp_s.innerHTML =
                "<lottie-player src='https://assets5.lottiefiles.com/private_files/lf30_qqhrsksk.json'  background='transparent'  speed='1'  style='width: 120px; height: 120px;'  loop  autoplay></lottie-player>"
            }
        
            else if(tempmod == "Mist"){
                temp_s.innerHTML =
                "<lottie-player src='https://assets5.lottiefiles.com/private_files/lf30_qqhrsksk.json'  background='transparent'  speed='1'  style='width: 120px; height: 120px;'  loop  autoplay></lottie-player>"
            }
            
            else if(tempmod == "Smoke"){
                temp_s.innerHTML =
                "<lottie-player src='https://assets10.lottiefiles.com/temp/lf20_kOfPKE.json'  background='transparent'  speed='1'  style='width: 120px; height: 120px;'  loop  autoplay></lottie-player>"
            }

            else if(tempmod == "Snow"){
                temp_s.innerHTML =
                "<lottie-player src='https://assets6.lottiefiles.com/private_files/lf30_9bptg8sh.json'  background='transparent'  speed='1'  style='width: 120px; height: 120px;'  loop  autoplay></lottie-player>"
            }
        
            else if(tempmod == "Clouds"){
                temp_s.innerHTML =
                "<lottie-player src='https://assets5.lottiefiles.com/private_files/lf30_5tzqguri.json'  background='transparent'  speed='1'  style='width: 120px; height: 120px;'  loop  autoplay></lottie-player>"
            }

            else if(tempmod == "Fog"){
                temp_s.innerHTML =
                "<lottie-player src='https://assets7.lottiefiles.com/private_files/lf30_qqhrsksk.json'  background='transparent'  speed='1'  style='width: 120px; height: 120px;'  loop  autoplay></lottie-player>"
            }

            else if(tempmod == "Rain"){
                temp_s.innerHTML =
                "<lottie-player src='https://assets6.lottiefiles.com/private_files/lf30_jr9yjlcf.json'  background='transparent'  speed='1'  style='width: 120px; height: 120px;'  loop  autoplay></lottie-player>"
            }
            
            else if(tempmod == "Lightning"){
                temp_s.innerHTML =
                "<lottie-player src='https://assets10.lottiefiles.com/private_files/lf30_kj3arjju.json'  background='transparent'  speed='1'  style='width: 120px; height: 120px;'  loop  autoplay></lottie-player>"
            }

            else if(tempmod == "Wind"){
                temp_s.innerHTML =
                "<lottie-player src='https://assets4.lottiefiles.com/packages/lf20_khrclx93.json'  background='transparent'  speed='1'  style='width: 120px; height: 120px;'  loop  autoplay></lottie-player>"
            }

            else if(tempmod == "Sunny"){
                temp_s.innerHTML =
                "<lottie-player src='https://assets5.lottiefiles.com/temp/lf20_Stdaec.json'  background='transparent'  speed='1'  style='width: 120px; height: 120px;'  loop  autoplay></lottie-player>"
            }

            else {
                temp_s.innerHTML =
                "<lottie-player src='https://assets6.lottiefiles.com/datafiles/kr7vxsZXeUCocfV/data.json'  background='transparent'  speed='1'  style='width: 120px; height: 120px;'  loop  autoplay></lottie-player>"
            }
        }
        catch{
            city_name.innerText ="Please enter proper city name";
            temp.innerText ="0";
            datahide.classList.add('datahide');
            
        temp_s.innerHTML =
            "<lottie-player src='https://assets6.lottiefiles.com/datafiles/kr7vxsZXeUCocfV/data.json'  background='transparent'  speed='1'  style='width: 120px; height: 120px;'  loop  autoplay></lottie-player>"
        }
    }
}

submit.addEventListener('click', getInfo);
