import { useState, useEffect } from 'react';
import { isPlatform } from '@ionic/react';

import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';
import { Capacitor } from '@capacitor/core';

export interface UserPhoto {
  filepath?: string;
  webviewPath?: string;
}

export function usePhotoGallery() {
  const [photo, setPhoto] = useState<UserPhoto>(
    {
      webviewPath: "https://migration-polopoly.otempo.com.br/polopoly_fs/3.219668.1534216140!httpImage/image.jpg_gen/derivatives/hard-news-img-medium-fit_380/image.jpg",
    }
  );

  const takePhoto = async () => {
    const photo = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });

    const fileName = Date.now() + '.jpeg';
    const newPhoto = {
      filepath: fileName,
      webviewPath: photo.webPath,
    }

    setPhoto(newPhoto);
  };

  return {
    photo,
    takePhoto,
  };
}