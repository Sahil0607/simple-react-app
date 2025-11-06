const ShowItemDetail = ({ itemDetail }) => {
  return (
    <div>
      <h3>Show Item Detail Component</h3>
      <p>User Name: {itemDetail.name}</p>
      {/* <p>User Email: {itemDetail.email}</p>
      <p>User Phone: {itemDetail.phone}</p>
      <p>User Website: {itemDetail.website}</p>
      <p>
        User Address:{" "}
        {itemDetail.address
          ? `${itemDetail.address.suite}, ${itemDetail.address.street}, ${itemDetail.address.city} - ${itemDetail.address.zipcode}`
          : ""}
      </p>
      <p>
        Company:{" "}
        {itemDetail.company
          ? `${itemDetail.company.name} - ${itemDetail.company.catchPhrase}`
          : ""}
      </p> */}
    </div>
  );
};

export default ShowItemDetail;
