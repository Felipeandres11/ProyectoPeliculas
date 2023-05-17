const API = "https://api.themoviedb.org/3";
export function get(path){
    return fetch(API + path,{
        headers:{
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZTg2MmFkMzBkMTI5OWYzODY3YmEyNGZhN2NiYTUxNSIsInN1YiI6IjY0NjQ0ZGI0OWYzN2IwMDEzZDVmNTYyOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._bpJRvoXiS6cSjHGyqpXwsXXV2s4lpSRF2Lz9v_x0NA",
            "Content-Type": "application/json;charset=utf-8"
        }
    }).then((result)=>result.json())
}