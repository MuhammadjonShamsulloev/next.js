import React from 'react';

interface Props {
  params: { id: number; photoId: number };
}

const PhotoId = ({ params: { id, photoId } }: Props) => {
  return (
    <div>
      PhotoId it was {id} and photid {photoId}
    </div>
  );
};

export default PhotoId;
