import React, { Fragment, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PinDropOutlinedIcon from '@mui/icons-material/PinDropOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PublicIcon from '@mui/icons-material/Public';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import TransferWithinAStationIcon from '@mui/icons-material/TransferWithinAStation';
import { Country, State } from 'country-state-city';
import { useNavigate } from 'react-router-dom';

import './shipping.scss';
import { saveShippingInfo } from '../../actions/cartAction';
import CheckoutSteps from './CheckoutSteps';
// import MetaData from '../layout/MetaData';

const Shipping = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const alert = useAlert();
  const { shippingInfo } = useSelector((state) => state.cartReducer);

  const [address, setAddress] = useState(shippingInfo.address);
  const [city, setCity] = useState(shippingInfo.city);
  const [state, setState] = useState(shippingInfo.state);
  const [country, setCountry] = useState(shippingInfo.country);
  const [pinCode, setPinCode] = useState(shippingInfo.pinCode);
  const [phoneNo, setPhoneNo] = useState(shippingInfo.phoneNo);

  const shippingSubmit = (e) => {
    e.preventDefault();

    if (phoneNo.length < 10 || phoneNo.length > 10) {
      alert('Phone Number should be 10 digits Long');
      return;
    }
    dispatch(
      saveShippingInfo({ address, city, state, country, pinCode, phoneNo })
    );
    // history.push('/order/confirm');
    navigate('/order/confirm');
  };

  return (
    <Fragment>
      {/* <MetaData title='Shipping Details' /> */}

      <CheckoutSteps activeStep={0} />

      <div className='shippingContainer'>
        <div className='shippingBox'>
          <form
            className='shippingForm'
            encType='multipart/form-data'
            onSubmit={shippingSubmit}
          >
            <div>
              <HomeOutlinedIcon />
              <input
                type='text'
                placeholder='Address'
                required
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>

            <div>
              <LocationOnOutlinedIcon />
              <input
                type='text'
                placeholder='City'
                required
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>

            <div>
              <PinDropOutlinedIcon />
              <input
                type='number'
                placeholder='Pin Code'
                required
                value={pinCode}
                onChange={(e) => setPinCode(e.target.value)}
              />
            </div>

            <div>
              <PhoneAndroidIcon />
              <input
                type='number'
                placeholder='Phone Number'
                required
                value={phoneNo}
                onChange={(e) => setPhoneNo(e.target.value)}
                size='10'
              />
            </div>

            <div>
              <PublicIcon />

              <select
                required
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              >
                <option value=''>Country</option>
                {Country &&
                  Country.getAllCountries().map((item) => (
                    <option key={item.isoCode} value={item.isoCode}>
                      {item.name}
                    </option>
                  ))}
              </select>
            </div>

            {country && (
              <div>
                <TransferWithinAStationIcon />

                <select
                  required
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                >
                  <option value=''>State</option>
                  {State &&
                    State.getStatesOfCountry(country).map((item) => (
                      <option key={item.isoCode} value={item.name}>
                        {item.name}
                      </option>
                    ))}
                </select>
              </div>
            )}

            <input
              type='submit'
              value='Continue'
              className='shippingBtn'
              disabled={state ? false : true}
            />
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Shipping;
