import { useState, useEffect } from 'react';
import { isPlatform } from '@ionic/react';

import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';
import { Capacitor } from '@capacitor/core';

export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}

export function usePhotoGallery() {
  const [photo, setPhoto] = useState<UserPhoto>(
    {
      filepath: "https://source.unsplash.com/40x40/?portrait?4",
      webviewPath: "https://source.unsplash.com/40x40/?portrait?4",
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