
export const handleView = (data) => {
  return console.log("Ver:", data.id);
//   return <Link to={`/ver/${data}`} />;
};

export const handleEdit = (data) => {
  console.log(`Editando el registro: ${data}`);
};

export const handleDelete = (data) => {
  console.log(`Eliminando el registro: ${data}`);
};