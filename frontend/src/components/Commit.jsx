import PropTypes from 'prop-types';

const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
};


export const Commit = ({commit}) =>{
    return(
        <div
            className="w-full bg-white shadow-md rounded-lg overflow-hidden flex p-4 mb-4 relative"
        >
            <img
                className="w-16 h-16 rounded-full mr-4"
                src={commit.author.avatar_url}
                alt="Commit"
            />
            <div className="flex-grow">
                <h3 className="text-xl font-semibold mb-2">{commit.author.login}</h3>
                <p className="text-gray-800">{commit.commit.message}</p>
            </div>
            <p className="text-gray-500 text-sm absolute right-0 mt-2 mr-5">{formatDate(commit.commit.author.date)}</p>
        </div>
    )
}

Commit.propTypes = {
    commit: PropTypes.shape({
      author: PropTypes.shape({
        avatar_url: PropTypes.string.isRequired,
        login: PropTypes.string.isRequired,
      }).isRequired,
      commit: PropTypes.shape({
        author: PropTypes.shape({
          date: PropTypes.string.isRequired,
        }).isRequired,
        message: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  };