/*
 * Copyright (C) 2018 Matus Zamborsky
 * This file is part of The Ontology Wallet&ID.
 *
 * The The Ontology Wallet&ID is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * The Ontology Wallet&ID is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with The Ontology Wallet&ID.  If not, see <http://www.gnu.org/licenses/>.
 */
import { get } from 'lodash';
import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { withProps } from '../../compose';
import { Props, SendFailedView } from './sendFailedView';

const enhancer = (Component: React.ComponentType<Props>) => (props: RouteComponentProps<any>) => (
  withProps({
    amount: get(props.location, 'state.amount', ''),
    asset: get(props.location, 'state.asset', ''),
    handleCancel: () => {
      props.history.goBack();
    },
    handleOk: () => {
      props.history.push('/dashboard');
    },
    recipient: get(props.location, 'state.recipient', '')
  }, (injectedProps) => (
    <Component {...injectedProps} />
  ))
);

export const SendFailed = enhancer(SendFailedView);
