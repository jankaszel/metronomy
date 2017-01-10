// so, this is a very basic oscillator based on what matt gallagher did,
// <https://www.cocoawithlove.com/2010/10/ios-tone-generator-introduction-to.html>.

#import <Foundation/Foundation.h>
#import <AudioUnit/AudioUnit.h>
#import <React/RCTBridgeModule.h>

@interface NativeOscillator : NSObject <RCTBridgeModule>
{
	AudioComponentInstance toneUnit;
}

- (void)play;
- (void)stop;

@end

