export const uploadFile = async (file: File) => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', 'ag690d1x');
  const res = await fetch('http://api.cloudinary.com/v1_1/dsszoved8/image/upload', {
    method: 'POST',
    body: formData
  });

  return await res.json();
};
