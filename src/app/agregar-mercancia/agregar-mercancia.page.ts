import { Component, OnInit } from '@angular/core';
import { ToastController, LoadingController } from '@ionic/angular';
import { MercanciaModel } from '../models/MercanciaModel';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { NavController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Component({
  selector: 'app-agregar-mercancia',
  templateUrl: './agregar-mercancia.page.html',
  styleUrls: ['./agregar-mercancia.page.scss'],
})
export class AgregarMercanciaPage implements OnInit {

  mercancia = {} as MercanciaModel;

  constructor(private toastCtrl: ToastController,
    private afAuth: AngularFireAuth,
    private loadingCtrl: LoadingController,
    private navCtrl: NavController,
    private firestore: AngularFirestore) { }

    
  ngOnInit() {
  }

  async createmercancia(mercancia: MercanciaModel) {

   // if (this.formValidation()) {
      let loader = await this.loadingCtrl.create({
        message: "Espere un momento por favor..."
      });
      await loader.present();

      try {
        await this.firestore.collection("mercancia").add(mercancia);

        this.navCtrl.navigateRoot("mostrarmercancia");

      } catch (e: any) {
        e.message = "Mensaje de error en post";
        let errorMessage = e.message || e.getLocalizedMessage();

        this.showToast(errorMessage);
      }

      await loader.dismiss();

      this.navCtrl.navigateRoot("mostrarMercancia");

   // }



  }

  /*formValidation() {
    if (!this.post.title) {
      this.showToast("Ingrese un titulo");
      return false;
    }

    if (!this.post.details) {
      this.showToast("Ingrese una descripción");
      return false;
    }

    return true;
  } */


  showToast(message: string) {
    this.toastCtrl.create({
      message: message,
      duration: 5000 // Aumenta la duración del mensaje a 5 segundos
    }).then(toastData => toastData.present());
  }

}
