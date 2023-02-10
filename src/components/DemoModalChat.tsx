import MeetingContext from 'meeting/MeetingContext';
import {Message} from 'models/Message';
import {useContext, useState} from 'react';
import {useForm} from 'react-hook-form';
import {Text, TouchableOpacity, View} from 'react-native';
import Modal from 'react-native-modal';
import ChatWrapper from './Chat';

type FormData = {
  content: string;
};

interface Props {}

const messages: Message[] = [
  {
    content: 'novapo ui huhuh kakak lol lfse',
    username: 'novapo',
    socketId: 'mocnien',
  },
  {
    content: 'novapo',
    username: 'novapo',
    socketId: 'novapo',
  },
  {
    content: 'aka xade left rrihg ticog lnova hilarray ',
    username: 'mocnien',
    socketId: 'mocnien',
  },
  {
    content: 'aka xade left rrihg ticog lnova hilarray ',
    username: 'mocnien',
    socketId: 'mocnien',
  },
  {
    content: 'novapo ui huhuh kakak lol lfse',
    username: 'novapo',
    socketId: 'mocnien',
  },
  {
    content: 'novapo',
    username: 'novapo',
    socketId: 'novapo',
  },
  {
    content:
      'fe novapo ujn hey jude don make it bad take a sad song anhd mkaer it butet ',
    username: 'novapo',
    socketId: 'novapo',
  },
  {
    content:
      'fe novapo ujn hey jude don make it bad take a sad song anhd mkaer it butet ',
    username: 'novapo',
    socketId: 'novapo',
  },
  {
    content: 'aka xade left rrihg ticog lnova hilarray ',
    username: 'mocnien',
    socketId: 'mocnien',
  },
  {
    content:
      'fe novapo ujn hey jude don make it bad take a sad song anhd mkaer it butet ',
    username: 'novapo',
    socketId: 'novapo',
  },
  {
    content: 'aka xade left rrihg ticog lnova hilarray ',
    username: 'mocnien',
    socketId: 'mocnien',
  },
  {
    content:
      'fe novapo ujn hey jude don make it bad take a sad song anhd mkaer it butet ',
    username: 'novapo',
    socketId: 'novapo',
  },
];

export default function DemoModalChat({}: Props) {
  const {messagesInChannel, username} = useContext(MeetingContext).MeetingState;
  const dispatch = useContext(MeetingContext).MeetingDispatch;
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormData>({
    defaultValues: {
      content: '',
    },
  });

  const handleSendMessage = (data: FormData) => {
    console.log('send message', data.content);
    dispatch({
      type: 'send_message',
      payload: data.content,
    });
  };

  const onSubmit = (data: FormData) => handleSendMessage(data);

  console.log('message in channels:', messagesInChannel);

  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          setIsModalVisible(true);
        }}>
        <Text>oopen chat</Text>
      </TouchableOpacity>
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={() => setIsModalVisible(false)}
        swipeDirection={['up', 'left', 'right', 'down']}
        className="justify-end m-0 bg-white">
        <ChatWrapper onClose={()=>{setIsModalVisible(false)}} messages={messages} socketId={'novapo'} />
      </Modal>
    </View>
  );
}
