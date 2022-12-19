import { Component, ReactNode } from 'react';
import Snippet from '../../../index';
import Output from '../../../../../@types/Output';

export interface IntegerBufferSnippetProps {
    controlIdentifier: string;
    output: Output;
}

export default class IntegerBufferSnippet extends Component<IntegerBufferSnippetProps> {
    public render(): ReactNode {
        const { controlIdentifier, output } = this.props;
        const methodName = Snippet.snakeToCamelCase(`${controlIdentifier}_Buffer`);
        const callbackMethodName = Snippet.snakeToCamelCase(`on_${controlIdentifier}_change`);

        return (
            <Snippet>
                void {callbackMethodName}(unsigned int newValue) &#123;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;/* your code here */
                <br />
                &#125;
                <br />
                DcsBios::IntegerBuffer {methodName}({Snippet.toHex(output.address)}, {Snippet.toHex(output.mask)},{' '}
                {output.shift_by}, {callbackMethodName});
            </Snippet>
        );
    }
}