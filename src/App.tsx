import { useSelector, useDispatch } from 'react-redux';
import { addLanguages, useLanguages, toFavorite } from './Redux/Slice/sliceLanguage';
import { useState } from 'react';

function App() {
  const lanaguages = useSelector(useLanguages)
  const [newLanguage, setNewLanguage] = useState('')
  const dispatch = useDispatch()

  return (
    <div>
      {lanaguages.map((language) => ( 
          <div style={{ display: 'flex', gap: '20px', marginBottom: '10px' }}>
            <span style={{ color: language.favorite ? 'green' : 'black' }}>{language.name}</span>
            <button onClick={() => dispatch(toFavorite(language.name))}>{language.favorite ? 'Desfavoritar' : 'Favoritar'}</button>
          </div>
      ))}

      <div>
        <input 
          type="text" 
          value={newLanguage} 
          onChange={(e) => setNewLanguage(e.target.value)}
        />

        <button type='button' onClick={() => dispatch(addLanguages(newLanguage))}>Adicionar</button>
      </div>
    </div>
  )
}

export default App
