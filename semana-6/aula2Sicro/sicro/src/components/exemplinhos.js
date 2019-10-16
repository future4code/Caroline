class App extends Component {
  constructor() {
    super();
    this.state = {
      playlists: [],
      errorMessage: undefined,
      playlistNameValue: ""
    };
  }

  componentDidMount() {
    this.getPlaylists();
  }

  getPlaylists = () => {
    // url: "https://us-central1-spotif4.cloudfunctions.net/api/playlists/getAllPlaylists"
    // token: "00e30928fa107f4157583e5631d18f95"
    const request = axios.get(
      "https://us-central1-spotif4.cloudfunctions.net/api/playlists/getAllPlaylists",
      {
        headers: {
          auth: "00e30928fa107f4157583e5631d18f95"
        }
      }
    );

    request
      .then(response => {
        console.log(response);
        this.setState({ playlists: response.data.result.list });
      })
      .catch(error => {
        console.log(error);
        this.setState({
          errorMessage:
            "Ocorreu um erro! Atualize a página para tentar novamente!"
        });
      });
  };

  getPlaylistMusics = playlistId => {
    const request = axios.get(
      `https://us-central1-spotif4.cloudfunctions.net/api/playlists/getPlaylistMusics/${playlistId}`,
      {
        headers: {
          auth: "00e30928fa107f4157583e5631d18f95"
        }
      }
    );

    request
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  addNewPlaylist = () => {
    // url: "https://us-central1-spotif4.cloudfunctions.net/api/playlists/createPlaylist"
    // token: "00e30928fa107f4157583e5631d18f95"
    const data = {
      name: this.state.playlistNameValue
    };

    const request = axios.post(
      "https://us-central1-spotif4.cloudfunctions.net/api/playlists/createPlaylist",
      data,
      {
        headers: {
          auth: "00e30928fa107f4157583e5631d18f95"
        }
      }
    );

    request
      .then(response => {
        console.log(response);
        this.getPlaylists()
      })
      .catch(error => {
        console.log(error);
      });
  };

  onChangePlaylistName = (event) => {
    this.setState({playlistNameValue: event.target.value})
  }

  render() {
    console.log("Playlists: ", this.state.playlists);
    const listaDeElementosDePlaylists = this.state.playlists.map(
      cadaPlaylist => {
        const funcaoIntermediaria = () => {
          this.getPlaylistMusics(cadaPlaylist.id);
        };
        return <li onClick={funcaoIntermediaria}>{cadaPlaylist.name}</li>;
      }
    );
    return (
      <div>
        <input type="text" value={this.state.playlistNameValue} onChange={this.onChangePlaylistName} />
        <button onClick={this.addNewPlaylist}>Criar playlist!</button>
        {this.state.errorMessage ? <p>{this.state.errorMessage}</p> : null}
        <ul>{listaDeElementosDePlaylists}</ul>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
