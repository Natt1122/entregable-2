import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-mostrarmercancia',
  templateUrl: './mostrarmercancia.page.html',
  styleUrls: ['./mostrarmercancia.page.scss'],
})
export class MostrarmercanciaPage implements OnInit {

  constructor( 
    private loadingCtrl: LoadingController,    
    private toastCtrl: ToastController,
    private firestore : AngularFirestore
    ) {}

  ngOnInit() {
   this.getmostarmercancia();
  }
  mostrarmercancia:any;
  
  
  async getmostarmercancia(){
    let loader = await this.loadingCtrl.create({
      message: "Espere un momento por favor..."
    });
    await loader.present();

    try {
      this.firestore.collection('mercancia')
        .snapshotChanges()
        .subscribe((data:any[]) =>{

          this.mostrarmercancia = data.map((e:any) =>{
            return{
              id: e.payload.doc.id,
              referencia: e.payload.doc.data()["referencia"],
              talla: e.payload.doc.data()["talla"],
              color: e.payload.doc.data()["color"],
          }
        });
      }); 
      
      await loader.dismiss();
    } catch (e:any) {
      e.message = "mensaje de error del home";
      let errorMessage = e.message || e.getLocalizedMessage();
        
        this.showToast(errorMessage); 
    }
  }

  showToast(message: string) {
    this.toastCtrl.create({
      message: message,
      duration: 5000 // Aumenta la duración del mensaje a 5 segundos
    }).then(toastData => toastData.present());
  }
}


