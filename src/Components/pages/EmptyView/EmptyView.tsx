import "./EmptyView.css";
interface EmptyViewProps {
    title: string;
	description: string
}

function EmptyView(props: EmptyViewProps): JSX.Element {
    return (
        <div className="EmptyView">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <img src="https://media.giphy.com/media/UtWimzHLDlACk/giphy.gif" alt="bla bla"/>
        </div>
    );
}

export default EmptyView;
