import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(
    private http:HttpClient
  ) { }
  
  uploadImage(data){
    return this.http.post<any>('http://localhost:3000/figures',data).toPromise();
  }

  async takePicture(){
    const image = await Camera.getPhoto({
      quality: 100,
      allowEditing: true,
      source: CameraSource.Camera,
      resultType: CameraResultType.Base64 //para el formato de imagen manipulable
    });
    const response=await this.uploadImage( {picture :image.base64String});
    console.log(response);
    return response;
  } //Para llamar en cada vista tenemos que importar primero 
  //en su ts
  
}
