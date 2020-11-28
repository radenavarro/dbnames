import "./Main.scss"
import {Button, Input, Select} from "antd";
import {useState} from "react";
import { RocketOutlined } from '@ant-design/icons';
import {barzonator} from "../helpers/helpers";
const { Option } = Select;

const Main = props => {
    // const nameOwners = ['owner1', 'owner2', 'owner3']
    // const [selectedOwner, setSelectedOwner] = useState(null)
    const [word, setWord] = useState(null);
    const [generatedWord, setGeneratedWord] = useState(null);
    // const handleChange = (e) => setSelectedOwner(e)
    const handleWordChange = (e) => {
        setWord(e.target.value)
    };
    return (
        <div className={'main'}>
            <div className={'main-wrapper'}>
                <h4>Messing with words</h4>
                <div className={'main-select'}>
                    <span>Word: </span>
                    <Input
                        placeholder={'Type a word'}
                        style={{width:"14em"}}
                        onChange={e=>handleWordChange(e)}
                        value={word}
                    />
                    <Button
                        type="primary"
                        shape="round"
                        icon={<RocketOutlined /> ?? ''}
                        onClick ={(e) => {
                            setGeneratedWord(barzonator(word))
                        }}
                    >
                        Generate
                    </Button>
                    <span className={'main-output'}>{generatedWord}</span>
                </div>
            </div>
        </div>
    )
};

export default Main