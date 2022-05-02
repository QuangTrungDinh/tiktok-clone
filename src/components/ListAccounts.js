const ListAccounts = (props) => {
  return (
    <div class="suggested-accounts">
      <p>{props.title}</p>
      {props.accounts && props.accounts.map((acc) => {
        return (
          <div>
            <img src={acc.avatar} alt="avatar" />
            <div>
              <div>{acc.username}</div>
              <p>{acc.name}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListAccounts;
