import {getImageUrl} from './utils.js'

export default function Profile() {
  return (
    <card>
      <Avatar
      size={100}
      person={{
        name: 'katsuko saruhashi',
      }}
      />
    </card>
  );
}

function Avatar({person, size}) {
  return (
    <img 
     className="avatar"
     src={getImageUrl(person)}
     alt={person.name}
     width={size}
     height={size}
     />
  );
}

function Card({children}) {
  return (
    <div className="card">
      {children}
    </div>
  );
}
