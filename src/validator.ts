const translator = {
  email: 'Correo electronico',
  birthday: 'Fecha de cumpleaños',
};

function validator(errorItems) {
  return errorItems.map((v) => {
    const {
      message,
      context: { key },
    } = v;
    const translatedKey = translator[key];
    const translatedMessage = message.replace(/(\").+?(\")/g, translatedKey);
    return { message: translatedMessage, key };
  });
}

export default validator;
